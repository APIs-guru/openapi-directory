import { SpeakeasyBase } from "../../../internal/utils";
export declare enum SpellsFormatEnum {
    Xml = "xml",
    Json = "json"
}
export declare class SpellsPathParams extends SpeakeasyBase {
    format: SpellsFormatEnum;
}
export declare class SpellsRequest extends SpeakeasyBase {
    pathParams: SpellsPathParams;
}
export declare class SpellsResponse extends SpeakeasyBase {
    contentType: string;
    spells?: any[];
    statusCode: number;
}
