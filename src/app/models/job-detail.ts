export class Job_Entity {
    public Id: Number;
    public JobName: String;
    public CategoryId?: Number;
    public SupervisorName: String;
    public SupervisorEmail: String;
    public Status: String;
    public Category: Category;
}

export class JobDetail extends Job_Entity {
    public Description: String;
    public StartDate?: Date;
    public EndDate?: Date;
}

export class Category {
    public Id: Number;
    public CategoryName: String;
}
