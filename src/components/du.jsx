import React from 'react'
import Table from 'react-data-table-component'

export default function du() {
  const columns1 = [
    {
      name: "Unit",
      selector: row => row.unit
    },
    {
      name: "GPA",
      selector: row => row.gpa
    },
    {
      name: "Exam Date",
      selector: row => row.examDate
    },
    {
      name: "Exam Time",
      selector: row => row.examTime
    }
  ]

  const data1 = [
    {
      id: 1,
      unit: "A (Science)",
      gpa: 8.00,
      examDate: "12 May 2023",
      examTime: "11:00 AM - 12:30 PM"
    },
    {
      id: 2,
      unit: "B (Fine Arts Unit)",
      gpa: 7.50,
      examDate: "6 May 2023",
      examTime: "11:00 AM - 12:30 PM"
    },
    {
      id: 3,
      unit: "C (Business Studies Unit)",
      gpa: 7.50,
      examDate: "13 May 2023",
      examTime: "11:00 AM - 12:30 PM"
    },
    {
      id: 4,
      unit: "D (Arts, Law and Social Science Unit)",
      gpa: 8.00,
      examDate: "29 April 2023",
      examTime: "11:00 AM - 12:30 PM"
    },
  ]
  const columns2 = [
    {
      name: "Apply Start",
      selector: row => row.applyStart
    },
    {
      name: "Apply End",
      selector: row => row.applyEnd
    },
    {
      name: "Apply Fee",
      selector: row => row.applyFee
    }
  ]

  const data2 = [
    {
      id: 1,
      applyStart: "27 February 2023",
      applyEnd: "20 March 2023",
      applyFee: 1000
    }
  ]
  const A_Unit_Col = [
    {
      name: "Subject Name",
      selector: row => row.subjectName
    },
    {
      name: "MCQ",
      selector: row => row.mcq
    },
    {
      name: "Written",
      selector: row => row.written
    }
  ]

  const A_Unit_Data = [
    {
      id: 1,
      subjectName: "Physics",
      mcq: 15,
      written: 10
    },
    {
      id: 2,
      subjectName: "Chemistry",
      mcq: 15,
      written: 10
    },
    {
      id: 3,
      subjectName: "Mathematics",
      mcq: 15,
      written: 10
    },
    {
      id: 4,
      subjectName: "Biology",
      mcq: 15,
      written: 10
    },
    {
      id: 5,
      subjectName: "Bangla",
      mcq: 15,
      written: 10
    },
    {
      id: 6,
      subjectName: "English",
      mcq: 15,
      written: 10
    },
  ]
  const B_Unit_Col = [
    {
      name: "Subject Name",
      selector: row => row.subjectName
    },
    {
      name: "MCQ",
      selector: row => row.mcq
    },
    {
      name: "Written",
      selector: row => row.written
    }
  ]

  const B_Unit_Data = [
    {
      id: 1,
      subjectName: "Bangla/Elective English",
      mcq: 15,
      written: 20
    },
    {
      id: 2,
      subjectName: "General English",
      mcq: 15,
      written: 20
    },
    {
      id: 3,
      subjectName: "General Knowledge",
      mcq: 30
    }
  ]
  const C_Unit_Col = [
    {
      name: "Subject Name",
      selector: row => row.subjectName
    },
    {
      name: "MCQ",
      selector: row => row.mcq
    },
    {
      name: "Written",
      selector: row => row.written
    },
  ]

  const C_Unit_Data = [
    {
      id: 1,
      subjectName: "Bangla",
      mcq: 12,
      written: "Bangla to English Translate (5 Mark)"
    },
    {
      id: 1,
      subjectName: "English",
      mcq: 12,
      written: "Ënglish to Bangla Translate (5 Mark)"
    },
    {
      id: 1,
      subjectName: "Accounting",
      mcq: 12
    },
    {
      id: 1,
      subjectName: "Business Studies",
      mcq: 12
    },
    {
      id: 1,
      subjectName: "Finance",
      mcq: 12
    }
  ]
  const D_Unit_Col = [
    {
      name: "Subject Name",
      selector: row => row.subjectName
    },
    {
      name: "MCQ",
      selector: row => row.mcq
    },
    {
      name: "Written",
      selector: row => row.written
    }
  ]

  const D_Unit_Data = [
    {
      id: 1,
      subjectName: "Bangla/Advanced English",
      mcq: 15,
      written: 15
    },
    {
      id: 1,
      subjectName: "English",
      mcq: 15,
      written: 15
    },
    {
      id: 1,
      subjectName: "General Knowledge",
      mcq: 30,
      written: 10
    }
  ]
  return (
    <section className='py-8'>
      <h2 className='text-center py-4 text-5xl'>Dhaka University</h2>
      <div className="tables">
        <Table columns={columns1} data={data1} className="text-center"></Table>
        <br />
        <Table columns={columns2} data={data2}></Table>
      </div>
      <div className='py-4'>
        <h2 className='py-4 text-center text-2xl'>A Unit Science - Mark Distribution</h2>
        <Table columns={A_Unit_Col} data={A_Unit_Data}></Table>
      </div>
      <div>
        <h2 className='py-4 text-center text-2xl'>B Unit Arts - Mark Distribution</h2>
        <Table columns={B_Unit_Col} data={B_Unit_Data}></Table>
      </div>
      <div>
        <h2 className='py-4 text-center text-2xl'>C Unit Business Studies - Mark Distribution</h2>
        <Table columns={C_Unit_Col} data={C_Unit_Data}></Table>
      </div>
      <div>
        <h2 className='py-4 text-center text-2xl'>D Unit - Mark Distribution</h2>
        <Table columns={D_Unit_Col} data={D_Unit_Data}></Table>
      </div>
    </section>
  )
}
