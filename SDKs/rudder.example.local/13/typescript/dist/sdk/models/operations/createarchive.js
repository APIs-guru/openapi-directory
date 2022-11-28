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
var CreateArchivePathParams = /** @class */ (function (_super) {
    __extends(CreateArchivePathParams, _super);
    function CreateArchivePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=archiveKind" }),
        __metadata("design:type", String)
    ], CreateArchivePathParams.prototype, "archiveKind", void 0);
    return CreateArchivePathParams;
}(SpeakeasyBase));
export { CreateArchivePathParams };
export var CreateArchive200ApplicationJsonActionEnum;
(function (CreateArchive200ApplicationJsonActionEnum) {
    CreateArchive200ApplicationJsonActionEnum["ArchiveFull"] = "archiveFull";
    CreateArchive200ApplicationJsonActionEnum["ArchiveGroups"] = "archiveGroups";
    CreateArchive200ApplicationJsonActionEnum["ArchiveRules"] = "archiveRules";
    CreateArchive200ApplicationJsonActionEnum["ArchiveDirectives"] = "archiveDirectives";
    CreateArchive200ApplicationJsonActionEnum["ArchiveParameters"] = "archiveParameters";
})(CreateArchive200ApplicationJsonActionEnum || (CreateArchive200ApplicationJsonActionEnum = {}));
var CreateArchive200ApplicationJsonDataFull = /** @class */ (function (_super) {
    __extends(CreateArchive200ApplicationJsonDataFull, _super);
    function CreateArchive200ApplicationJsonDataFull() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=commiter" }),
        __metadata("design:type", String)
    ], CreateArchive200ApplicationJsonDataFull.prototype, "commiter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gitCommit" }),
        __metadata("design:type", String)
    ], CreateArchive200ApplicationJsonDataFull.prototype, "gitCommit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], CreateArchive200ApplicationJsonDataFull.prototype, "id", void 0);
    return CreateArchive200ApplicationJsonDataFull;
}(SpeakeasyBase));
export { CreateArchive200ApplicationJsonDataFull };
var CreateArchive200ApplicationJsonData = /** @class */ (function (_super) {
    __extends(CreateArchive200ApplicationJsonData, _super);
    function CreateArchive200ApplicationJsonData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=full" }),
        __metadata("design:type", CreateArchive200ApplicationJsonDataFull)
    ], CreateArchive200ApplicationJsonData.prototype, "full", void 0);
    return CreateArchive200ApplicationJsonData;
}(SpeakeasyBase));
export { CreateArchive200ApplicationJsonData };
export var CreateArchive200ApplicationJsonResultEnum;
(function (CreateArchive200ApplicationJsonResultEnum) {
    CreateArchive200ApplicationJsonResultEnum["Success"] = "success";
    CreateArchive200ApplicationJsonResultEnum["Error"] = "error";
})(CreateArchive200ApplicationJsonResultEnum || (CreateArchive200ApplicationJsonResultEnum = {}));
var CreateArchive200ApplicationJson = /** @class */ (function (_super) {
    __extends(CreateArchive200ApplicationJson, _super);
    function CreateArchive200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=action" }),
        __metadata("design:type", String)
    ], CreateArchive200ApplicationJson.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", CreateArchive200ApplicationJsonData)
    ], CreateArchive200ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=result" }),
        __metadata("design:type", String)
    ], CreateArchive200ApplicationJson.prototype, "result", void 0);
    return CreateArchive200ApplicationJson;
}(SpeakeasyBase));
export { CreateArchive200ApplicationJson };
var CreateArchiveRequest = /** @class */ (function (_super) {
    __extends(CreateArchiveRequest, _super);
    function CreateArchiveRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateArchivePathParams)
    ], CreateArchiveRequest.prototype, "pathParams", void 0);
    return CreateArchiveRequest;
}(SpeakeasyBase));
export { CreateArchiveRequest };
var CreateArchiveResponse = /** @class */ (function (_super) {
    __extends(CreateArchiveResponse, _super);
    function CreateArchiveResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateArchiveResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateArchiveResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateArchive200ApplicationJson)
    ], CreateArchiveResponse.prototype, "createArchive200ApplicationJsonObject", void 0);
    return CreateArchiveResponse;
}(SpeakeasyBase));
export { CreateArchiveResponse };
