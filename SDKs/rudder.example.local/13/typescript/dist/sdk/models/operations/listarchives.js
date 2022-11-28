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
var ListArchivesPathParams = /** @class */ (function (_super) {
    __extends(ListArchivesPathParams, _super);
    function ListArchivesPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=archiveKind" }),
        __metadata("design:type", String)
    ], ListArchivesPathParams.prototype, "archiveKind", void 0);
    return ListArchivesPathParams;
}(SpeakeasyBase));
export { ListArchivesPathParams };
export var ListArchives200ApplicationJsonActionEnum;
(function (ListArchives200ApplicationJsonActionEnum) {
    ListArchives200ApplicationJsonActionEnum["ArchiveFull"] = "archiveFull";
    ListArchives200ApplicationJsonActionEnum["ArchiveGroups"] = "archiveGroups";
    ListArchives200ApplicationJsonActionEnum["ArchiveRules"] = "archiveRules";
    ListArchives200ApplicationJsonActionEnum["ArchiveDirectives"] = "archiveDirectives";
    ListArchives200ApplicationJsonActionEnum["ArchiveParameters"] = "archiveParameters";
})(ListArchives200ApplicationJsonActionEnum || (ListArchives200ApplicationJsonActionEnum = {}));
var ListArchives200ApplicationJsonDataFull = /** @class */ (function (_super) {
    __extends(ListArchives200ApplicationJsonDataFull, _super);
    function ListArchives200ApplicationJsonDataFull() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=commiter" }),
        __metadata("design:type", String)
    ], ListArchives200ApplicationJsonDataFull.prototype, "commiter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gitCommit" }),
        __metadata("design:type", String)
    ], ListArchives200ApplicationJsonDataFull.prototype, "gitCommit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], ListArchives200ApplicationJsonDataFull.prototype, "id", void 0);
    return ListArchives200ApplicationJsonDataFull;
}(SpeakeasyBase));
export { ListArchives200ApplicationJsonDataFull };
var ListArchives200ApplicationJsonData = /** @class */ (function (_super) {
    __extends(ListArchives200ApplicationJsonData, _super);
    function ListArchives200ApplicationJsonData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=full", elemType: ListArchives200ApplicationJsonDataFull }),
        __metadata("design:type", Array)
    ], ListArchives200ApplicationJsonData.prototype, "full", void 0);
    return ListArchives200ApplicationJsonData;
}(SpeakeasyBase));
export { ListArchives200ApplicationJsonData };
export var ListArchives200ApplicationJsonResultEnum;
(function (ListArchives200ApplicationJsonResultEnum) {
    ListArchives200ApplicationJsonResultEnum["Success"] = "success";
    ListArchives200ApplicationJsonResultEnum["Error"] = "error";
})(ListArchives200ApplicationJsonResultEnum || (ListArchives200ApplicationJsonResultEnum = {}));
var ListArchives200ApplicationJson = /** @class */ (function (_super) {
    __extends(ListArchives200ApplicationJson, _super);
    function ListArchives200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=action" }),
        __metadata("design:type", String)
    ], ListArchives200ApplicationJson.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", ListArchives200ApplicationJsonData)
    ], ListArchives200ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=result" }),
        __metadata("design:type", String)
    ], ListArchives200ApplicationJson.prototype, "result", void 0);
    return ListArchives200ApplicationJson;
}(SpeakeasyBase));
export { ListArchives200ApplicationJson };
var ListArchivesRequest = /** @class */ (function (_super) {
    __extends(ListArchivesRequest, _super);
    function ListArchivesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListArchivesPathParams)
    ], ListArchivesRequest.prototype, "pathParams", void 0);
    return ListArchivesRequest;
}(SpeakeasyBase));
export { ListArchivesRequest };
var ListArchivesResponse = /** @class */ (function (_super) {
    __extends(ListArchivesResponse, _super);
    function ListArchivesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListArchivesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ListArchivesResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListArchives200ApplicationJson)
    ], ListArchivesResponse.prototype, "listArchives200ApplicationJsonObject", void 0);
    return ListArchivesResponse;
}(SpeakeasyBase));
export { ListArchivesResponse };
