namespace API.Entities
{
    public class User
    {
        public int Id { get; set; }
        public string FirstName { get; set; } 
        public string LastName { get; set; } 
        public string Email { get; set; } 
        public string Password { get; set; } 
        public string MobileNumber { get; set; }
        public DateTime CreatedOn { get; set; }
        public UserType UserType { get; set; } = UserType.NONE;
        public AccountStatus AccountStatus { get; set; } = AccountStatus.UNAPROOVED;
    }
}
