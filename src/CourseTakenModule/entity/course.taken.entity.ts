
import { Column, Entity, JoinColumn, Index, Check, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Audit } from '../../CommonsModule';
import { User } from '../../UserModule/entity/user.entity';
import { Course } from '../../CourseModule/entity/course.entity';
import { Expose } from 'class-transformer';
import { CourseTakenStatusEnum } from '../enum';

@Entity()
@Check('CHECK `status` IN (`' + CourseTakenStatusEnum.TAKEN + '`, `'+ CourseTakenStatusEnum.COMPLETED + '`)')
@Index((relation: CourseTaken) => [relation.user, relation.course], { unique: true })
export class CourseTaken extends Audit {

  @Expose()
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Expose()
  @ManyToOne<User>('User', (user: User) => user.coursesTaken)
  @JoinColumn({
    name: 'user_id',
  })
  user: string;

  @Expose()
  @ManyToOne<Course>('Course', (course: Course) => course.takenCourses)
  @JoinColumn({
    name: 'course_id',
  })
  course: string;

  @Expose()
  @Column({
    nullable: false,
    name: 'course_start_date',
  })
  courseStartDate: Date;

  @Expose()
  @Column({
    nullable: true,
    name: 'course_complete_date',
  })
  courseCompleteDate: Date;

  @Expose()
  @Column({
    nullable: false,
    name: 'status',
    default: CourseTakenStatusEnum.TAKEN,
  })
  status: string;

  @Expose()
  @Column({
    nullable: false,
    name: 'completition',
  })
  completition: number;

  @Expose()
  @Column({
    nullable: true,
    name: 'current_lesson_id',
  })
  currentLesson: number;

  @Expose()
  @Column({
    nullable: true,
    name: 'current_part_id',
  })
  currentPart: number;

  @Expose()
  @Column({
    nullable: true,
    name: 'current_test_id',
  })
  currentTest: number;
}
