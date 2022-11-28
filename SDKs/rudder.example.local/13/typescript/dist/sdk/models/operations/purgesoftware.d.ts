import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PurgeSoftware200ApplicationJsonActionEnum {
    PurgeSoftware = "purgeSoftware"
}
export declare enum PurgeSoftware200ApplicationJsonResultEnum {
    Success = "success",
    Error = "error"
}
export declare class PurgeSoftware200ApplicationJson extends SpeakeasyBase {
    action: PurgeSoftware200ApplicationJsonActionEnum;
    data: string[];
    result: PurgeSoftware200ApplicationJsonResultEnum;
}
export declare class PurgeSoftwareResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    purgeSoftware200ApplicationJsonObject?: PurgeSoftware200ApplicationJson;
}
