import crypto from 'crypto'

export const makeID = () => crypto.randomBytes(16).toString('hex')

export const colors = ['primary', 'success', 'info', 'warning', 'danger', 'dark', 'light']
export const htmlColors = ['#0275d8', '#5cb85c', '#5bc0de', '#f0ad4e', '#d9534f', '#292b2c', '#f7f7f7']

export const getRandomColor = () => {
    const index = Math.floor(Math.random() * colors.length)
    return colors[index]
}

export const handleChange = cb => event => {
    cb(event.target.value);
};