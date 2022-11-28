import { SpeakeasyBase } from "../../../internal/utils";
export declare enum CreativeCommonsCodeEnum {
    By = "by",
    ByNc = "by-nc",
    ByNcNd = "by-nc-nd",
    ByNcSa = "by-nc-sa",
    ByNd = "by-nd",
    BySa = "by-sa",
    Cc0 = "cc0"
}
export declare class CreativeCommons extends SpeakeasyBase {
    code: CreativeCommonsCodeEnum;
    name: string;
    uri: string;
}
