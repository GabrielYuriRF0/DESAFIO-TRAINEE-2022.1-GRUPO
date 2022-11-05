const env = process.env.NODE_ENV || 'dev';

const config = () => {

    switch (env) {

        case 'dev':
            return {
                bd_url: 'mongodb+srv://adm_user:Fzgnp4cXPZuwruUQ@bd-projectcodex.qxkscws.mongodb.net/?retryWrites=true&w=majority',
                jwt_verf: 'APurjNLd2ZBenU1M',
                jwt_expires_in: '7d'
            }

        case 'hml':
            return {
                bd_url: 'mongodb+srv://adm_user:Fzgnp4cXPZuwruUQ@bd-projectcodex.qxkscws.mongodb.net/?retryWrites=true&w=majority',
                jwt_verf: 'APurjNLd2ZBenU1M',
                jwt_expires_in: '7d'
            }

        case 'prod':
            return {
                bd_url: 'mongodb+srv://adm_user:Fzgnp4cXPZuwruUQ@bd-projectcodex.qxkscws.mongodb.net/?retryWrites=true&w=majority',
                jwt_verf: 'APurjNLd2ZBenU1M',
                jwt_expires_in: '7d'
            }
    }
}

console.log(`Iniciando a API em ambiente ${env.toUpperCase()}`)

module.exports = config();