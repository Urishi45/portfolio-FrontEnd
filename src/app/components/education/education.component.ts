import { Component, OnInit } from '@angular/core';
import { EducationService } from 'src/app/services/education.service';
import { Education } from 'src/app/education';
import { ExperienceService } from 'src/app/services/experience.service';
import { Experience } from 'src/app/experience';
import { FormGroup, FormBuilder } from '@angular/forms'

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  education!: Education[]
  experience!: Experience[]
  AddEducationFormState: boolean = false
  EditEducationFormState: boolean = false
  addExperienceFormState: boolean = false
  editExperienceFormState: boolean = false

  id!: number
  type!: string
  description!: string

  editId!: number
  editType!: string
  editDescription!: string

  experienceId!: string
  experiencePlace!: string
  experienceDescription!: string
  experienceTimePeriod!: string

  editExperienceId!: number
  editExperiencePlace!: string
  editExperienceDescription!: string
  editExperienceTimePeriod!: string
  

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

  deleteExperience(item: any) {
    this.experienceService.deleteExperience(item.id).subscribe(() => {
      this.experience = this.experience.filter (x => x.id !== item.id)
    })
  }

  deleteEducation(item: any) {
    this.educationService.deleteEducation(item.id).subscribe(() => {
      this.education = this.education.filter(e => e.id !== item.id)
    })
  }
  
  toggleEducationForm() {
    this.AddEducationFormState = !this.AddEducationFormState
  }

  toggleEditEducationForm(education: any) {
    this.EditEducationFormState = !this.EditEducationFormState
    this.editId = education.id
    this.editType = education.type
    this.editDescription = education.description

  }

  toggleEditExperienceForm(experience: any) {
    this.editExperienceFormState = !this.editExperienceFormState
    this.editExperienceId = experience.id
    this.editExperiencePlace = experience.place
    this.editExperienceDescription = experience.description
    this.editExperienceTimePeriod = experience.timePeriod
  }

  toggleAddExperience() {
    this.addExperienceFormState = !this.addExperienceFormState
  }


  onAddEducation() {
    this.AddEducationFormState = !this.AddEducationFormState
    const newEducation = {
      type: this.type,
      description: this.description
    }

    this.educationService.addEducation(newEducation).subscribe((education) => {
      this.education.push(education)
    })

    this.type = '',
    this.description = ''
    
  }

  onAddExperience() {
    this.addExperienceFormState = !this.addExperienceFormState
    const newExperience = {
      place: this.experiencePlace,
      description: this.experienceDescription,
      timePeriod: this.experienceTimePeriod
    }

    this.experienceService.addExperience(newExperience).subscribe(experience => {
      this.experience.push(experience)
    })

    this.experiencePlace = ''
    this.experienceDescription = ''
    this.experienceTimePeriod = ''
  }

  onEditEducation() {
    this.EditEducationFormState = !this.EditEducationFormState
    const updateEducation = {
      id: this.editId,
      type: this.editType,
      description: this.editDescription
    }

    this.educationService.updateEducation(updateEducation).subscribe((education) => {
      for (let e of this.education) {
        if (e.id === education.id) {
          e.type = education.type
          e.description = education.description
        }
      }
    })
  }

  onEditExperience() {
    this.editExperienceFormState = !this.editExperienceFormState
    const updatedExperience = {
      id: this.editExperienceId,
      place: this.editExperiencePlace,
      description: this.editExperienceDescription,
      timePeriod: this.editExperienceTimePeriod
    }
    
    this.experienceService.updateExperience(updatedExperience).subscribe(experience => {
      for (let e of this.experience) {
        if (e.id === experience.id) {
          e.place = experience.place
          e.description = experience.description
          e.timePeriod = experience.timePeriod
        }
      }
    })
  }
}
