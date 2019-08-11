let base = ''
if (process.env.NODE_ENV === 'development') {
  base = 'https://www.v2ex.com/api/'
} else if (process.env.NODE_ENV === 'production') {
  base = ''
}

export const baseUrl = base
// 输出日志信息
export const noConsole = false
