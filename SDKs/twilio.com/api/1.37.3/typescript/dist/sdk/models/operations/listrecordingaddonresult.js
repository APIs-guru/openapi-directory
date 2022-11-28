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
export var ListRecordingAddOnResultServerList = [
    "https://api.twilio.com",
];
var ListRecordingAddOnResultPathParams = /** @class */ (function (_super) {
    __extends(ListRecordingAddOnResultPathParams, _super);
    function ListRecordingAddOnResultPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=AccountSid" }),
        __metadata("design:type", String)
    ], ListRecordingAddOnResultPathParams.prototype, "accountSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ReferenceSid" }),
        __metadata("design:type", String)
    ], ListRecordingAddOnResultPathParams.prototype, "referenceSid", void 0);
    return ListRecordingAddOnResultPathParams;
}(SpeakeasyBase));
export { ListRecordingAddOnResultPathParams };
var ListRecordingAddOnResultQueryParams = /** @class */ (function (_super) {
    __extends(ListRecordingAddOnResultQueryParams, _super);
    function ListRecordingAddOnResultQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PageSize" }),
        __metadata("design:type", Number)
    ], ListRecordingAddOnResultQueryParams.prototype, "pageSize", void 0);
    return ListRecordingAddOnResultQueryParams;
}(SpeakeasyBase));
export { ListRecordingAddOnResultQueryParams };
var ListRecordingAddOnResultSecurity = /** @class */ (function (_super) {
    __extends(ListRecordingAddOnResultSecurity, _super);
    function ListRecordingAddOnResultSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], ListRecordingAddOnResultSecurity.prototype, "accountSidAuthToken", void 0);
    return ListRecordingAddOnResultSecurity;
}(SpeakeasyBase));
export { ListRecordingAddOnResultSecurity };
var ListRecordingAddOnResultListRecordingAddOnResultResponse = /** @class */ (function (_super) {
    __extends(ListRecordingAddOnResultListRecordingAddOnResultResponse, _super);
    function ListRecordingAddOnResultListRecordingAddOnResultResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=add_on_results", elemType: shared.ApiV2010AccountRecordingRecordingAddOnResult }),
        __metadata("design:type", Array)
    ], ListRecordingAddOnResultListRecordingAddOnResultResponse.prototype, "addOnResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=end" }),
        __metadata("design:type", Number)
    ], ListRecordingAddOnResultListRecordingAddOnResultResponse.prototype, "end", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=first_page_uri" }),
        __metadata("design:type", String)
    ], ListRecordingAddOnResultListRecordingAddOnResultResponse.prototype, "firstPageUri", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=next_page_uri" }),
        __metadata("design:type", String)
    ], ListRecordingAddOnResultListRecordingAddOnResultResponse.prototype, "nextPageUri", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], ListRecordingAddOnResultListRecordingAddOnResultResponse.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListRecordingAddOnResultListRecordingAddOnResultResponse.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=previous_page_uri" }),
        __metadata("design:type", String)
    ], ListRecordingAddOnResultListRecordingAddOnResultResponse.prototype, "previousPageUri", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=start" }),
        __metadata("design:type", Number)
    ], ListRecordingAddOnResultListRecordingAddOnResultResponse.prototype, "start", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], ListRecordingAddOnResultListRecordingAddOnResultResponse.prototype, "uri", void 0);
    return ListRecordingAddOnResultListRecordingAddOnResultResponse;
}(SpeakeasyBase));
export { ListRecordingAddOnResultListRecordingAddOnResultResponse };
var ListRecordingAddOnResultRequest = /** @class */ (function (_super) {
    __extends(ListRecordingAddOnResultRequest, _super);
    function ListRecordingAddOnResultRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListRecordingAddOnResultRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListRecordingAddOnResultPathParams)
    ], ListRecordingAddOnResultRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListRecordingAddOnResultQueryParams)
    ], ListRecordingAddOnResultRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListRecordingAddOnResultSecurity)
    ], ListRecordingAddOnResultRequest.prototype, "security", void 0);
    return ListRecordingAddOnResultRequest;
}(SpeakeasyBase));
export { ListRecordingAddOnResultRequest };
var ListRecordingAddOnResultResponse = /** @class */ (function (_super) {
    __extends(ListRecordingAddOnResultResponse, _super);
    function ListRecordingAddOnResultResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListRecordingAddOnResultResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListRecordingAddOnResultListRecordingAddOnResultResponse)
    ], ListRecordingAddOnResultResponse.prototype, "listRecordingAddOnResultResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ListRecordingAddOnResultResponse.prototype, "statusCode", void 0);
    return ListRecordingAddOnResultResponse;
}(SpeakeasyBase));
export { ListRecordingAddOnResultResponse };
