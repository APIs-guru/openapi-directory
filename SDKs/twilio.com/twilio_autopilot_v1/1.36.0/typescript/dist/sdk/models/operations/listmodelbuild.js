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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export var LISTMODELBUILD_SERVERS = [
    "https://autopilot.twilio.com",
];
var ListModelBuildPathParams = /** @class */ (function (_super) {
    __extends(ListModelBuildPathParams, _super);
    function ListModelBuildPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=AssistantSid" }),
        __metadata("design:type", String)
    ], ListModelBuildPathParams.prototype, "assistantSid", void 0);
    return ListModelBuildPathParams;
}(SpeakeasyBase));
export { ListModelBuildPathParams };
var ListModelBuildQueryParams = /** @class */ (function (_super) {
    __extends(ListModelBuildQueryParams, _super);
    function ListModelBuildQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" }),
        __metadata("design:type", Number)
    ], ListModelBuildQueryParams.prototype, "pageSize", void 0);
    return ListModelBuildQueryParams;
}(SpeakeasyBase));
export { ListModelBuildQueryParams };
var ListModelBuildSecurity = /** @class */ (function (_super) {
    __extends(ListModelBuildSecurity, _super);
    function ListModelBuildSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], ListModelBuildSecurity.prototype, "accountSidAuthToken", void 0);
    return ListModelBuildSecurity;
}(SpeakeasyBase));
export { ListModelBuildSecurity };
var ListModelBuildRequest = /** @class */ (function (_super) {
    __extends(ListModelBuildRequest, _super);
    function ListModelBuildRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListModelBuildRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListModelBuildPathParams)
    ], ListModelBuildRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListModelBuildQueryParams)
    ], ListModelBuildRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListModelBuildSecurity)
    ], ListModelBuildRequest.prototype, "security", void 0);
    return ListModelBuildRequest;
}(SpeakeasyBase));
export { ListModelBuildRequest };
var ListModelBuildListModelBuildResponseMeta = /** @class */ (function (_super) {
    __extends(ListModelBuildListModelBuildResponseMeta, _super);
    function ListModelBuildListModelBuildResponseMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=first_page_url" }),
        __metadata("design:type", String)
    ], ListModelBuildListModelBuildResponseMeta.prototype, "firstPageUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], ListModelBuildListModelBuildResponseMeta.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "json, name=next_page_url" }),
        __metadata("design:type", String)
    ], ListModelBuildListModelBuildResponseMeta.prototype, "nextPageUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], ListModelBuildListModelBuildResponseMeta.prototype, "page", void 0);
    __decorate([
        Metadata({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListModelBuildListModelBuildResponseMeta.prototype, "pageSize", void 0);
    __decorate([
        Metadata({ data: "json, name=previous_page_url" }),
        __metadata("design:type", String)
    ], ListModelBuildListModelBuildResponseMeta.prototype, "previousPageUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], ListModelBuildListModelBuildResponseMeta.prototype, "url", void 0);
    return ListModelBuildListModelBuildResponseMeta;
}(SpeakeasyBase));
export { ListModelBuildListModelBuildResponseMeta };
var ListModelBuildListModelBuildResponse = /** @class */ (function (_super) {
    __extends(ListModelBuildListModelBuildResponse, _super);
    function ListModelBuildListModelBuildResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=meta" }),
        __metadata("design:type", ListModelBuildListModelBuildResponseMeta)
    ], ListModelBuildListModelBuildResponse.prototype, "meta", void 0);
    __decorate([
        Metadata({ data: "json, name=model_builds", elemType: shared.AutopilotV1AssistantModelBuild }),
        __metadata("design:type", Array)
    ], ListModelBuildListModelBuildResponse.prototype, "modelBuilds", void 0);
    return ListModelBuildListModelBuildResponse;
}(SpeakeasyBase));
export { ListModelBuildListModelBuildResponse };
var ListModelBuildResponse = /** @class */ (function (_super) {
    __extends(ListModelBuildResponse, _super);
    function ListModelBuildResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListModelBuildResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListModelBuildListModelBuildResponse)
    ], ListModelBuildResponse.prototype, "listModelBuildResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ListModelBuildResponse.prototype, "statusCode", void 0);
    return ListModelBuildResponse;
}(SpeakeasyBase));
export { ListModelBuildResponse };
