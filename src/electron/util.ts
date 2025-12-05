export function isDev(): boolean{
    return process.env.NOVE_ENV === 'development'
}