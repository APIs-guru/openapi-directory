import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListArchivesPathParams extends SpeakeasyBase {
    archiveKind: shared.ArchiveKindEnum;
}
export declare enum ListArchives200ApplicationJsonActionEnum {
    ArchiveFull = "archiveFull",
    ArchiveGroups = "archiveGroups",
    ArchiveRules = "archiveRules",
    ArchiveDirectives = "archiveDirectives",
    ArchiveParameters = "archiveParameters"
}
export declare class ListArchives200ApplicationJsonDataFull extends SpeakeasyBase {
    commiter: string;
    gitCommit: string;
    id: string;
}
export declare class ListArchives200ApplicationJsonData extends SpeakeasyBase {
    full: ListArchives200ApplicationJsonDataFull[];
}
export declare enum ListArchives200ApplicationJsonResultEnum {
    Success = "success",
    Error = "error"
}
export declare class ListArchives200ApplicationJson extends SpeakeasyBase {
    action: ListArchives200ApplicationJsonActionEnum;
    data: ListArchives200ApplicationJsonData;
    result: ListArchives200ApplicationJsonResultEnum;
}
export declare class ListArchivesRequest extends SpeakeasyBase {
    pathParams: ListArchivesPathParams;
}
export declare class ListArchivesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    listArchives200ApplicationJsonObject?: ListArchives200ApplicationJson;
}
