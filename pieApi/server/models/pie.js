module.exports = (sequelize, DataType) => {
    const Pie = sequelize.define('pie',{
    
        nameOfPie : {
            type:DataType.STRING,
            allowNull: false
          },
        baseOfPie : {
            type:DataType.STRING,
            allowNull: false
        },
        crust : {
            type:DataType.STRING,
            allowNull: false
        },
        timeToBake : {
            type:DataType.INTEGER,
            allowNull: false
        },
        servings : {
            type:DataType.INTEGER,
            allowNull: false
        }, 
        rating : {
            type:DataType.INTEGER,
            allowNull: false
        }

    })
    return Pie;
}
