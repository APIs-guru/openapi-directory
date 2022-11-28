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
var GetProjectsPathParams = /** @class */ (function (_super) {
    __extends(GetProjectsPathParams, _super);
    function GetProjectsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=user_id" }),
        __metadata("design:type", Number)
    ], GetProjectsPathParams.prototype, "userId", void 0);
    return GetProjectsPathParams;
}(SpeakeasyBase));
export { GetProjectsPathParams };
export var GetProjectsDirectionEnum;
(function (GetProjectsDirectionEnum) {
    GetProjectsDirectionEnum["Asc"] = "asc";
    GetProjectsDirectionEnum["Desc"] = "desc";
})(GetProjectsDirectionEnum || (GetProjectsDirectionEnum = {}));
export var GetProjectsSortEnum;
(function (GetProjectsSortEnum) {
    GetProjectsSortEnum["Date"] = "date";
    GetProjectsSortEnum["Default"] = "default";
    GetProjectsSortEnum["ModifiedTime"] = "modified_time";
    GetProjectsSortEnum["Name"] = "name";
})(GetProjectsSortEnum || (GetProjectsSortEnum = {}));
var GetProjectsQueryParams = /** @class */ (function (_super) {
    __extends(GetProjectsQueryParams, _super);
    function GetProjectsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=direction" }),
        __metadata("design:type", String)
    ], GetProjectsQueryParams.prototype, "direction", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], GetProjectsQueryParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" }),
        __metadata("design:type", Number)
    ], GetProjectsQueryParams.prototype, "perPage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], GetProjectsQueryParams.prototype, "sort", void 0);
    return GetProjectsQueryParams;
}(SpeakeasyBase));
export { GetProjectsQueryParams };
var GetProjectsSecurity = /** @class */ (function (_super) {
    __extends(GetProjectsSecurity, _super);
    function GetProjectsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], GetProjectsSecurity.prototype, "oauth2", void 0);
    return GetProjectsSecurity;
}(SpeakeasyBase));
export { GetProjectsSecurity };
var GetProjectsRequest = /** @class */ (function (_super) {
    __extends(GetProjectsRequest, _super);
    function GetProjectsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetProjectsPathParams)
    ], GetProjectsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetProjectsQueryParams)
    ], GetProjectsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetProjectsSecurity)
    ], GetProjectsRequest.prototype, "security", void 0);
    return GetProjectsRequest;
}(SpeakeasyBase));
export { GetProjectsRequest };
var GetProjectsResponse = /** @class */ (function (_super) {
    __extends(GetProjectsResponse, _super);
    function GetProjectsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetProjectsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetProjectsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Error)
    ], GetProjectsResponse.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: shared.Project }),
        __metadata("design:type", Array)
    ], GetProjectsResponse.prototype, "projects", void 0);
    return GetProjectsResponse;
}(SpeakeasyBase));
export { GetProjectsResponse };
