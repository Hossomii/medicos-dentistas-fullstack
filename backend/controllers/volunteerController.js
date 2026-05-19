const volunteerService = require("../services/volunteerService");

const {
  volunteerSchema
} = require("../schemas/volunteerSchema");

const create = async (req, res, next) => {

  try {

    const validatedData = volunteerSchema.parse(req.body);

    const volunteer = await volunteerService.createVolunteer(validatedData);

    return res.status(201).json({
      message: "Voluntário criado com sucesso",
      volunteer
    });

  } catch (error) {

    next(error);

  }
};

const list = async (req, res, next) => {

  try {

    const volunteers = await volunteerService.listVolunteers();

    return res.status(200).json(volunteers);

  } catch (error) {

    next(error);

  }
};

module.exports = {
  create,
  list
};