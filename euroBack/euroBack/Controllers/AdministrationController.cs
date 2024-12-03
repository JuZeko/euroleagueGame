using euroBack.Database;
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
    }
}
