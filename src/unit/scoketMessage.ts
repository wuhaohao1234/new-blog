export default function scoketMessage(evt: any): Promise<{
    [key: string]: any
}> {
    return new Promise((resolve, reject) => {
        let received_msg = evt.data;
        const result = JSON.parse(received_msg);
        if (result.value.length !== 0) {
            // result.value = result.value.replace(/[\n\r]/g, `<br>`)
            result.value = result.value.split(/[\n\r]/g);
            result.value.forEach((str: any, key: number) => {
                const reg = /(((http|ftp)?:)\/\/|www)+[-A-Za-z0-9+&@#/%?=~_|!:,.;]+[-A-Za-z0-9+&@#/%=~_|]/g;
                // tslint:disable-next-line: no-shadowed-variable
                if (reg.exec(str)) {
                    result.value[key] = {}
                    // tslint:disable-next-line: no-shadowed-variable
                    result.value[key].value = str.replace(reg, '');
                    result.value[key].dataUrl = str.replace(result.value[key].value, '')
                } else {
                    result.value[key] = {}
                    result.value[key].value = str
                    console.log(result.value[key])
                }
            });
            resolve({
                user: result.user || null,
                value: result.value,
                date: result.date || null,
            })
        } else {
            reject('err')
        }

    })

}