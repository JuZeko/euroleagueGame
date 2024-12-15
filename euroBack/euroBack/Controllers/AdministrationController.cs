using euroBack.Database;
using euroBack.Dto;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace euroBack.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class AdministrationController(UserManager<User> userManager) : ControllerBase
    {
        private readonly UserManager<User> _userManager = userManager;

        [HttpGet]
        [Route("GetAllUsers")]
        public async Task<List<User>> GetAllUsers()
        {
            return await _userManager.Users.ToListAsync();
        }

        [HttpPost]
        [Route("CreateUser")]
        public async Task<IActionResult> CreateUser([FromBody] UserRequestDto model)
        {
            if (model == null)
            {
                return BadRequest("User data is missing.");
            }

            var user = new User
            {
                UserName = model.UserName,
                Email = model.Email,
                PasswordHash = model.Password,
                     
            };

            var result = await _userManager.CreateAsync(user, model.Password);

            if (result.Succeeded)
            {
                return Ok(new { message = "User created successfully" });
            }
            else
            {
                return BadRequest(result.Errors);
            }
        }
    }
}
