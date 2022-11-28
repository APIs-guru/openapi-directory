import { SpeakeasyBase } from "../../../internal/utils";
import { CallLogsEmbeddedObject } from "./calllogsembeddedobject";
import { Links } from "./links";
export declare class CallLogsHalResponse extends SpeakeasyBase {
    embedded?: CallLogsEmbeddedObject;
    links?: Links;
    page?: number;
    pageSize?: number;
    totalItems?: number;
    totalPage?: number;
}
