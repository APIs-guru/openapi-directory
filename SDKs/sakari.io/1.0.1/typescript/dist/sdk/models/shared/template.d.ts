import { SpeakeasyBase } from "../../../internal/utils";
export declare enum TemplateTypeEnum {
    Sms = "SMS",
    Web = "Web"
}
export declare class Template extends SpeakeasyBase {
    id?: string;
    name?: string;
    template?: string;
    type?: TemplateTypeEnum;
}
