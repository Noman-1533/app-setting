export interface singleSettingOption{
    label:string,
    subLabel?:string,
    option:string[],
    default:string
}
export interface singleSettingObject{
    label:string,
    subLabel:string,
    [alertName:string]:singleSettingOption | string
}
export interface settingCategory{
    [categoryName:string]:singleSettingObject
}