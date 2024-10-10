using System.ComponentModel.DataAnnotations;

public class Todo
{
    /* Key tells us that Id is the main way to identify each Todo in the database
    Guid represents a globally unique identifier
    */
    [Key]
    public Guid Id { get; set; }
    public string? Title { get; set; }
    public string? Description { get; set; }
    public string? Status { get; set; } 
    public bool IsComplete { get; set; }

    public Todo()
    {
        IsComplete = false;
    }
}