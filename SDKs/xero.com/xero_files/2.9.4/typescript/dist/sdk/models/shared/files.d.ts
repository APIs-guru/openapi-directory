import { SpeakeasyBase } from "../../../internal/utils/utils";
import { FileObject } from "./fileobject";
export declare class Files extends SpeakeasyBase {
    items?: FileObject[];
    page?: number;
    perPage?: number;
    totalCount?: number;
}
