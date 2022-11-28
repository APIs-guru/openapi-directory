var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export var RestoreArchiveArchiveRestoreKindEnum;
(function (RestoreArchiveArchiveRestoreKindEnum) {
    RestoreArchiveArchiveRestoreKindEnum["LatestArchive"] = "latestArchive";
    RestoreArchiveArchiveRestoreKindEnum["LatestCommit"] = "latestCommit";
    RestoreArchiveArchiveRestoreKindEnum["ArchiveId"] = "archive ID";
})(RestoreArchiveArchiveRestoreKindEnum || (RestoreArchiveArchiveRestoreKindEnum = {}));
var RestoreArchivePathParams = /** @class */ (function (_super) {
    __extends(RestoreArchivePathParams, _super);
    function RestoreArchivePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=archiveKind" }),
        __metadata("design:type", String)
    ], RestoreArchivePathParams.prototype, "archiveKind", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=archiveRestoreKind" }),
        __metadata("design:type", String)
    ], RestoreArchivePathParams.prototype, "archiveRestoreKind", void 0);
    return RestoreArchivePathParams;
}(SpeakeasyBase));
export { RestoreArchivePathParams };
export var RestoreArchive200ApplicationJsonActionEnum;
(function (RestoreArchive200ApplicationJsonActionEnum) {
    RestoreArchive200ApplicationJsonActionEnum["RestoreFullLatestArchive"] = "restoreFullLatestArchive";
    RestoreArchive200ApplicationJsonActionEnum["RestoreGroupLatestArchive"] = "restoreGroupLatestArchive";
    RestoreArchive200ApplicationJsonActionEnum["RestoreRulesLatestArchive"] = "restoreRulesLatestArchive";
    RestoreArchive200ApplicationJsonActionEnum["RestoreDirectivesLatestArchive"] = "restoreDirectivesLatestArchive";
    RestoreArchive200ApplicationJsonActionEnum["RestoreParametersLatestArchive"] = "restoreParametersLatestArchive";
    RestoreArchive200ApplicationJsonActionEnum["RestoreFullLatestCommit"] = "restoreFullLatestCommit";
    RestoreArchive200ApplicationJsonActionEnum["RestoreGroupLatestCommit"] = "restoreGroupLatestCommit";
    RestoreArchive200ApplicationJsonActionEnum["RestoreRulesLatestCommit"] = "restoreRulesLatestCommit";
    RestoreArchive200ApplicationJsonActionEnum["RestoreDirectivesLatestCommit"] = "restoreDirectivesLatestCommit";
    RestoreArchive200ApplicationJsonActionEnum["RestoreParametersLatestCommit"] = "restoreParametersLatestCommit";
    RestoreArchive200ApplicationJsonActionEnum["ArchiveFullDateRestore"] = "archiveFullDateRestore";
    RestoreArchive200ApplicationJsonActionEnum["ArchiveGroupDateRestore"] = "archiveGroupDateRestore";
    RestoreArchive200ApplicationJsonActionEnum["ArchiveRulesDateRestore"] = "archiveRulesDateRestore";
    RestoreArchive200ApplicationJsonActionEnum["ArchiveDirectivesDateRestore"] = "archiveDirectivesDateRestore";
    RestoreArchive200ApplicationJsonActionEnum["ArchiveParametersDateRestore"] = "archiveParametersDateRestore";
})(RestoreArchive200ApplicationJsonActionEnum || (RestoreArchive200ApplicationJsonActionEnum = {}));
var RestoreArchive200ApplicationJsonData = /** @class */ (function (_super) {
    __extends(RestoreArchive200ApplicationJsonData, _super);
    function RestoreArchive200ApplicationJsonData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=directive" }),
        __metadata("design:type", String)
    ], RestoreArchive200ApplicationJsonData.prototype, "directive", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=full" }),
        __metadata("design:type", String)
    ], RestoreArchive200ApplicationJsonData.prototype, "full", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=groups" }),
        __metadata("design:type", String)
    ], RestoreArchive200ApplicationJsonData.prototype, "groups", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=parameters" }),
        __metadata("design:type", String)
    ], RestoreArchive200ApplicationJsonData.prototype, "parameters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rules" }),
        __metadata("design:type", String)
    ], RestoreArchive200ApplicationJsonData.prototype, "rules", void 0);
    return RestoreArchive200ApplicationJsonData;
}(SpeakeasyBase));
export { RestoreArchive200ApplicationJsonData };
export var RestoreArchive200ApplicationJsonResultEnum;
(function (RestoreArchive200ApplicationJsonResultEnum) {
    RestoreArchive200ApplicationJsonResultEnum["Success"] = "success";
    RestoreArchive200ApplicationJsonResultEnum["Error"] = "error";
})(RestoreArchive200ApplicationJsonResultEnum || (RestoreArchive200ApplicationJsonResultEnum = {}));
var RestoreArchive200ApplicationJson = /** @class */ (function (_super) {
    __extends(RestoreArchive200ApplicationJson, _super);
    function RestoreArchive200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=action" }),
        __metadata("design:type", String)
    ], RestoreArchive200ApplicationJson.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", RestoreArchive200ApplicationJsonData)
    ], RestoreArchive200ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=result" }),
        __metadata("design:type", String)
    ], RestoreArchive200ApplicationJson.prototype, "result", void 0);
    return RestoreArchive200ApplicationJson;
}(SpeakeasyBase));
export { RestoreArchive200ApplicationJson };
var RestoreArchiveRequest = /** @class */ (function (_super) {
    __extends(RestoreArchiveRequest, _super);
    function RestoreArchiveRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RestoreArchivePathParams)
    ], RestoreArchiveRequest.prototype, "pathParams", void 0);
    return RestoreArchiveRequest;
}(SpeakeasyBase));
export { RestoreArchiveRequest };
var RestoreArchiveResponse = /** @class */ (function (_super) {
    __extends(RestoreArchiveResponse, _super);
    function RestoreArchiveResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], RestoreArchiveResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], RestoreArchiveResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RestoreArchive200ApplicationJson)
    ], RestoreArchiveResponse.prototype, "restoreArchive200ApplicationJsonObject", void 0);
    return RestoreArchiveResponse;
}(SpeakeasyBase));
export { RestoreArchiveResponse };
