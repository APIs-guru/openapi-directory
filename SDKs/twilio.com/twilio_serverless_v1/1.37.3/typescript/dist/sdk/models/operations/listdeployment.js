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
export var ListDeploymentServerList = [
    "https://serverless.twilio.com",
];
var ListDeploymentPathParams = /** @class */ (function (_super) {
    __extends(ListDeploymentPathParams, _super);
    function ListDeploymentPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=EnvironmentSid" }),
        __metadata("design:type", String)
    ], ListDeploymentPathParams.prototype, "environmentSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ServiceSid" }),
        __metadata("design:type", String)
    ], ListDeploymentPathParams.prototype, "serviceSid", void 0);
    return ListDeploymentPathParams;
}(SpeakeasyBase));
export { ListDeploymentPathParams };
var ListDeploymentQueryParams = /** @class */ (function (_super) {
    __extends(ListDeploymentQueryParams, _super);
    function ListDeploymentQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PageSize" }),
        __metadata("design:type", Number)
    ], ListDeploymentQueryParams.prototype, "pageSize", void 0);
    return ListDeploymentQueryParams;
}(SpeakeasyBase));
export { ListDeploymentQueryParams };
var ListDeploymentSecurity = /** @class */ (function (_super) {
    __extends(ListDeploymentSecurity, _super);
    function ListDeploymentSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], ListDeploymentSecurity.prototype, "accountSidAuthToken", void 0);
    return ListDeploymentSecurity;
}(SpeakeasyBase));
export { ListDeploymentSecurity };
var ListDeploymentListDeploymentResponseMeta = /** @class */ (function (_super) {
    __extends(ListDeploymentListDeploymentResponseMeta, _super);
    function ListDeploymentListDeploymentResponseMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=first_page_url" }),
        __metadata("design:type", String)
    ], ListDeploymentListDeploymentResponseMeta.prototype, "firstPageUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], ListDeploymentListDeploymentResponseMeta.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=next_page_url" }),
        __metadata("design:type", String)
    ], ListDeploymentListDeploymentResponseMeta.prototype, "nextPageUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], ListDeploymentListDeploymentResponseMeta.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListDeploymentListDeploymentResponseMeta.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=previous_page_url" }),
        __metadata("design:type", String)
    ], ListDeploymentListDeploymentResponseMeta.prototype, "previousPageUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], ListDeploymentListDeploymentResponseMeta.prototype, "url", void 0);
    return ListDeploymentListDeploymentResponseMeta;
}(SpeakeasyBase));
export { ListDeploymentListDeploymentResponseMeta };
var ListDeploymentListDeploymentResponse = /** @class */ (function (_super) {
    __extends(ListDeploymentListDeploymentResponse, _super);
    function ListDeploymentListDeploymentResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deployments", elemType: shared.ServerlessV1ServiceEnvironmentDeployment }),
        __metadata("design:type", Array)
    ], ListDeploymentListDeploymentResponse.prototype, "deployments", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=meta" }),
        __metadata("design:type", ListDeploymentListDeploymentResponseMeta)
    ], ListDeploymentListDeploymentResponse.prototype, "meta", void 0);
    return ListDeploymentListDeploymentResponse;
}(SpeakeasyBase));
export { ListDeploymentListDeploymentResponse };
var ListDeploymentRequest = /** @class */ (function (_super) {
    __extends(ListDeploymentRequest, _super);
    function ListDeploymentRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListDeploymentRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListDeploymentPathParams)
    ], ListDeploymentRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListDeploymentQueryParams)
    ], ListDeploymentRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListDeploymentSecurity)
    ], ListDeploymentRequest.prototype, "security", void 0);
    return ListDeploymentRequest;
}(SpeakeasyBase));
export { ListDeploymentRequest };
var ListDeploymentResponse = /** @class */ (function (_super) {
    __extends(ListDeploymentResponse, _super);
    function ListDeploymentResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListDeploymentResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListDeploymentListDeploymentResponse)
    ], ListDeploymentResponse.prototype, "listDeploymentResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ListDeploymentResponse.prototype, "statusCode", void 0);
    return ListDeploymentResponse;
}(SpeakeasyBase));
export { ListDeploymentResponse };
