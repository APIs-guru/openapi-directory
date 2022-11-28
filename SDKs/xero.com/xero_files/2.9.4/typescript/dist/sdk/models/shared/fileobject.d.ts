import { SpeakeasyBase } from "../../../internal/utils";
import { User } from "./user";
export declare class FileObject extends SpeakeasyBase {
    createdDateUtc?: string;
    folderId?: string;
    id?: string;
    mimeType?: string;
    name?: string;
    size?: number;
    updatedDateUtc?: string;
    user?: User;
}
