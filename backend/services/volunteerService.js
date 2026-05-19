const prisma = require("../database/prisma");

const createVolunteer = async (data) => {
  const volunteer = await prisma.volunteer.create({
    data: {
      name: data.name,
      email: data.email,
      phone: data.phone,
      message: data.message
    }
  });

  return volunteer;
};

const listVolunteers = async () => {
  const volunteers = await prisma.volunteer.findMany({
    orderBy: {
      createdAt: "desc"
    }
  });

  return volunteers;
};

module.exports = {
  createVolunteer,
  listVolunteers
};