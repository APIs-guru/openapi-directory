import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum RestoreArchiveArchiveRestoreKindEnum {
    LatestArchive = "latestArchive",
    LatestCommit = "latestCommit",
    ArchiveId = "archive ID"
}
export declare class RestoreArchivePathParams extends SpeakeasyBase {
    archiveKind: shared.ArchiveKindEnum;
    archiveRestoreKind: RestoreArchiveArchiveRestoreKindEnum;
}
export declare enum RestoreArchive200ApplicationJsonActionEnum {
    RestoreFullLatestArchive = "restoreFullLatestArchive",
    RestoreGroupLatestArchive = "restoreGroupLatestArchive",
    RestoreRulesLatestArchive = "restoreRulesLatestArchive",
    RestoreDirectivesLatestArchive = "restoreDirectivesLatestArchive",
    RestoreParametersLatestArchive = "restoreParametersLatestArchive",
    RestoreFullLatestCommit = "restoreFullLatestCommit",
    RestoreGroupLatestCommit = "restoreGroupLatestCommit",
    RestoreRulesLatestCommit = "restoreRulesLatestCommit",
    RestoreDirectivesLatestCommit = "restoreDirectivesLatestCommit",
    RestoreParametersLatestCommit = "restoreParametersLatestCommit",
    ArchiveFullDateRestore = "archiveFullDateRestore",
    ArchiveGroupDateRestore = "archiveGroupDateRestore",
    ArchiveRulesDateRestore = "archiveRulesDateRestore",
    ArchiveDirectivesDateRestore = "archiveDirectivesDateRestore",
    ArchiveParametersDateRestore = "archiveParametersDateRestore"
}
export declare class RestoreArchive200ApplicationJsonData extends SpeakeasyBase {
    directive?: string;
    full?: string;
    groups?: string;
    parameters?: string;
    rules?: string;
}
export declare enum RestoreArchive200ApplicationJsonResultEnum {
    Success = "success",
    Error = "error"
}
export declare class RestoreArchive200ApplicationJson extends SpeakeasyBase {
    action: RestoreArchive200ApplicationJsonActionEnum;
    data: RestoreArchive200ApplicationJsonData;
    result: RestoreArchive200ApplicationJsonResultEnum;
}
export declare class RestoreArchiveRequest extends SpeakeasyBase {
    pathParams: RestoreArchivePathParams;
}
export declare class RestoreArchiveResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    restoreArchive200ApplicationJsonObject?: RestoreArchive200ApplicationJson;
}
