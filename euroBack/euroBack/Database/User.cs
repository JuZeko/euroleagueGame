using Microsoft.AspNetCore.Identity;

namespace euroBack.Database
{
    public class User : IdentityUser
    {
        public string? Initials { get; set; }
    }
}
