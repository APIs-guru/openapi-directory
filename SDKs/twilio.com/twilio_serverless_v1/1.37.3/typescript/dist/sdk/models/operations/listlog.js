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
export var ListLogServerList = [
    "https://serverless.twilio.com",
];
var ListLogPathParams = /** @class */ (function (_super) {
    __extends(ListLogPathParams, _super);
    function ListLogPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=EnvironmentSid" }),
        __metadata("design:type", String)
    ], ListLogPathParams.prototype, "environmentSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ServiceSid" }),
        __metadata("design:type", String)
    ], ListLogPathParams.prototype, "serviceSid", void 0);
    return ListLogPathParams;
}(SpeakeasyBase));
export { ListLogPathParams };
var ListLogQueryParams = /** @class */ (function (_super) {
    __extends(ListLogQueryParams, _super);
    function ListLogQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=EndDate" }),
        __metadata("design:type", Date)
    ], ListLogQueryParams.prototype, "endDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=FunctionSid" }),
        __metadata("design:type", String)
    ], ListLogQueryParams.prototype, "functionSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PageSize" }),
        __metadata("design:type", Number)
    ], ListLogQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=StartDate" }),
        __metadata("design:type", Date)
    ], ListLogQueryParams.prototype, "startDate", void 0);
    return ListLogQueryParams;
}(SpeakeasyBase));
export { ListLogQueryParams };
var ListLogSecurity = /** @class */ (function (_super) {
    __extends(ListLogSecurity, _super);
    function ListLogSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], ListLogSecurity.prototype, "accountSidAuthToken", void 0);
    return ListLogSecurity;
}(SpeakeasyBase));
export { ListLogSecurity };
var ListLogListLogResponseMeta = /** @class */ (function (_super) {
    __extends(ListLogListLogResponseMeta, _super);
    function ListLogListLogResponseMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=first_page_url" }),
        __metadata("design:type", String)
    ], ListLogListLogResponseMeta.prototype, "firstPageUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], ListLogListLogResponseMeta.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=next_page_url" }),
        __metadata("design:type", String)
    ], ListLogListLogResponseMeta.prototype, "nextPageUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], ListLogListLogResponseMeta.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListLogListLogResponseMeta.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=previous_page_url" }),
        __metadata("design:type", String)
    ], ListLogListLogResponseMeta.prototype, "previousPageUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], ListLogListLogResponseMeta.prototype, "url", void 0);
    return ListLogListLogResponseMeta;
}(SpeakeasyBase));
export { ListLogListLogResponseMeta };
var ListLogListLogResponse = /** @class */ (function (_super) {
    __extends(ListLogListLogResponse, _super);
    function ListLogListLogResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=logs", elemType: shared.ServerlessV1ServiceEnvironmentLog }),
        __metadata("design:type", Array)
    ], ListLogListLogResponse.prototype, "logs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=meta" }),
        __metadata("design:type", ListLogListLogResponseMeta)
    ], ListLogListLogResponse.prototype, "meta", void 0);
    return ListLogListLogResponse;
}(SpeakeasyBase));
export { ListLogListLogResponse };
var ListLogRequest = /** @class */ (function (_super) {
    __extends(ListLogRequest, _super);
    function ListLogRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListLogRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListLogPathParams)
    ], ListLogRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListLogQueryParams)
    ], ListLogRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListLogSecurity)
    ], ListLogRequest.prototype, "security", void 0);
    return ListLogRequest;
}(SpeakeasyBase));
export { ListLogRequest };
var ListLogResponse = /** @class */ (function (_super) {
    __extends(ListLogResponse, _super);
    function ListLogResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListLogResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListLogListLogResponse)
    ], ListLogResponse.prototype, "listLogResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ListLogResponse.prototype, "statusCode", void 0);
    return ListLogResponse;
}(SpeakeasyBase));
export { ListLogResponse };
