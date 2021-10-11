// Mock Data

export const customerData = {
    owner: {
        firstName: 'Jeff',
        lastName: 'Smith',
        joined: new Date('3/25/2021')
    },
    beneficiaries: {
        anna: {
            firstName: 'Anna',
            lastName: 'Smith' 
        },
        david: {
            firstName: 'David',
            lastName: 'Smith' 
        }
    }
}

export const insuranceData = {
    healthInsurance: {
        totalDeductible: 6250,
        totalSpent: 1265.24,
        deadline: new Date('12/04/2021')
    },
    prescriptionInsurance: {
        spending: 68.92,
        activePrescriptions: 5
    },
    dentalInsurance: {
        limit: 2500,
        deductiblePerPerson: 40,
        totalSpent: 40.57
    }
}

export const couponsData = [
    {
        created: new Date(),
        type: 'prescription',
        heading: 'Save up to',
        owner: customerData.owner,
        textHTML: `per year on your Tier I prescription drug Promethazine if you go to an alternate pharmacy nearby.`,
        ctaHTML: ``,
        claimed: false,
        amount: 123
    },
    {
        created: new Date('10/7/2021'),
        type: 'medical',
        heading: 'Save up to',
        owner: customerData.beneficiaries.anna,
        textHTML: `by submitting your urgent care claim dated October 27, 2020 to Guardian.`,
        ctaHTML: `Save now`,
        claimed: false,
        amount: 123
    },
    {
        created: new Date('9/15/2021'),
        type: 'medical',
        heading: 'Save up to',
        owner: customerData.beneficiaries.david,
        textHTML: `per visit by changing to an in-network doctor for your recurring podiatry visits.`,
        ctaHTML: `Save now`,
        claimed: false,
        amount: 123
    },
    {
        created: new Date('08/24/2021'),
        type: 'dental',
        heading: 'Dental cleanings',
        owner: customerData.owner,
        textHTML: `Schedule your covered semi-annual dental cleaning with a dentist nearest you. Its not too late.`,
        ctaHTML: ``,
        claimed: false,
        amount: 123
    },
    {
        created: new Date('06/12/2021'),
        type: 'prescription',
        heading: 'Save up to',
        owner: customerData.owner,
        textHTML: `per fill on your Tier II prescription drug Foradil if you go to an alternate pharmacy nearby.`,
        ctaHTML: `Save now`,
        claimed: false,
        amount: 123
    },
    {
        created: new Date('01/05/2021'),
        type: 'Save up to',
        heading: 'Save up to',
        owner: customerData.owner,
        textHTML: `per fill on your Tier II prescription drug Foradil if you go to an alternate pharmacy nearby.`,
        ctaHTML: `Save now`,
        claimed: true,
        amount: 123
    }
];