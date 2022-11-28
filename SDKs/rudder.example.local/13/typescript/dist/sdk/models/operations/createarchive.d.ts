import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateArchivePathParams extends SpeakeasyBase {
    archiveKind: shared.ArchiveKindEnum;
}
export declare enum CreateArchive200ApplicationJsonActionEnum {
    ArchiveFull = "archiveFull",
    ArchiveGroups = "archiveGroups",
    ArchiveRules = "archiveRules",
    ArchiveDirectives = "archiveDirectives",
    ArchiveParameters = "archiveParameters"
}
export declare class CreateArchive200ApplicationJsonDataFull extends SpeakeasyBase {
    commiter: string;
    gitCommit: string;
    id: string;
}
export declare class CreateArchive200ApplicationJsonData extends SpeakeasyBase {
    full: CreateArchive200ApplicationJsonDataFull;
}
export declare enum CreateArchive200ApplicationJsonResultEnum {
    Success = "success",
    Error = "error"
}
export declare class CreateArchive200ApplicationJson extends SpeakeasyBase {
    action: CreateArchive200ApplicationJsonActionEnum;
    data: CreateArchive200ApplicationJsonData;
    result: CreateArchive200ApplicationJsonResultEnum;
}
export declare class CreateArchiveRequest extends SpeakeasyBase {
    pathParams: CreateArchivePathParams;
}
export declare class CreateArchiveResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    createArchive200ApplicationJsonObject?: CreateArchive200ApplicationJson;
}
