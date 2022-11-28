import { SpeakeasyBase } from "../../../internal/utils";
export declare enum ReadCvEfromFs200ApplicationJsonActionEnum {
    ReadCvEfromFs = "readCVEfromFS"
}
export declare class ReadCvEfromFs200ApplicationJsonData extends SpeakeasyBase {
    cvEs: number;
}
export declare enum ReadCvEfromFs200ApplicationJsonResultEnum {
    Success = "success",
    Error = "error"
}
export declare class ReadCvEfromFs200ApplicationJson extends SpeakeasyBase {
    action: ReadCvEfromFs200ApplicationJsonActionEnum;
    data: ReadCvEfromFs200ApplicationJsonData;
    result: ReadCvEfromFs200ApplicationJsonResultEnum;
}
export declare class ReadCvEfromFsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    readCvEfromFs200ApplicationJsonObject?: ReadCvEfromFs200ApplicationJson;
}
