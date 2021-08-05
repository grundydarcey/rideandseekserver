const ScavengerService = {
  getAllScavenger(knex) {
    return knex.select('*').from('scavenger');
  }
};

module.exports = ScavengerService;