import { Component, OnInit } from '@angular/core';
import { EducationService } from 'src/app/services/education.service';
import { Education } from 'src/app/education';
import { ExperienceService } from 'src/app/services/experience.service';
import { Experience } from 'src/app/experience';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  education!: Education[]
  experience!: Experience[]

  constructor(private educationService: EducationService, private experienceService: ExperienceService) {

  }

  ngOnInit() {
    this.getEducation()
    this.getExperience()
  }

  getEducation() {
    this.educationService.getEducation().subscribe(
      response => {
        this.education = response
      }
    )
  }

  getExperience() {
    this.experienceService.getExperience().subscribe(
      response => {
        this.experience = response
      }
    )
  }

  deleteExperience(id: number) {
    this.experienceService.deleteExperience(id).subscribe(() => {
      this.experience = this.experience.filter (x => x.id !== id)
    })
  }

  deleteEducation(id: number) {
    this.educationService.deleteEducation(id).subscribe(() => {
      this.education = this.education.filter(e => e.id !== id)
    })
  }
  
}
