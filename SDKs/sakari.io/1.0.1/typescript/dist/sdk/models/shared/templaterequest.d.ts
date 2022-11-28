import { SpeakeasyBase } from "../../../internal/utils";
export declare enum TemplateRequestTypeEnum {
    Sms = "SMS",
    Web = "Web"
}
export declare class TemplateRequest extends SpeakeasyBase {
    name?: string;
    template?: string;
    type?: TemplateRequestTypeEnum;
}
