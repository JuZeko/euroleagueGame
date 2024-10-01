using Microsoft.AspNetCore.Mvc;

namespace euroBack.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class EurolegueController : ControllerBase
    {
        private static readonly string[] LeaguePlayers =
        [
            "Dirkstys", "Rimkenzo", "Daryla", "Goryla", "Mantelis", "Skofildas"
        ];

        [HttpGet("GetLeaguePlayers")]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
        public string[] GetEuroleguePlayers()
        {
            return LeaguePlayers;
        }
    }
}
