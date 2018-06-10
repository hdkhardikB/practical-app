import { Injectable } from '@angular/core';
import { ApiUtilityService } from './api-utility.service';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Job_Entity, JobDetail } from '../models/job-detail';

@Injectable()
export class WorkerDataService {

  constructor(private api: ApiUtilityService) { }

  /**
   * To get the list of jobs out there.
   */
  getJobList(): Observable<Job_Entity[]> {
    return this.api.get('api/job');
  }

  /**
   * Gets the job detail based on job id.
   * @param id - an id of the job
   */
  getJobById(id: Number): Observable<JobDetail> {
    return this.api.get('api/job/GetJobById/' + id);
  }

  /**
   * Gets the list of jobs based on category
   * @param category - name of category
   */
  getJobByCategory(category: String): Observable<any> {
    return this.api.get('api/job/GetJobByCategory/' + category);
  }

  /**
   * Saves new job in db.
   * @param jobDetail - an object of type Job, having all details of job.
   */
  createJob(jobDetail: any): Observable<any> {
    return this.api.post('api/Job/PostProduct', jobDetail);
  }

  /**
   * To update the status of job .
   * @param status - type of status to be updated.
   * @param id - an id of the job to be updated.
   */
  updateJobStatus(status: String, id: Number): Observable<any> {
    return this.api.get('api/Job/PutJob/' + id + '/' + status);
  }

  /**
   * To check if same job exists in database.
   * @param jobName - name of the job.
   */
  checkJobAlreadyExists(jobName: String): Observable<any> {
    return this.api.get('api/job/CheckJobName/' + jobName);
  }

  /**
   * To get the list of categories.
   */
  getCategories(): Observable<any> {
    return this.api.get('api/Category');
  }

  /**
   * To get the list of jobs based on status.
   * @param status - name of the status for which job has to be fetched.
   */
  getJobByStatus(status: String): Observable<Job_Entity[]> {
    return this.api.get('api/job/GetJobByStatus/' + status);
  }
}
