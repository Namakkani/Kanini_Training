using System.ComponentModel.DataAnnotations;

namespace CollegePortal.Model
{
    public class Department
    {
        [Key]
        public int DepartmentID { get; set; }
        [Required]
        public string DepartmentName { get; set; }
    }
}
