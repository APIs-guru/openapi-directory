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
var ApplicationsCreatePathParams = /** @class */ (function (_super) {
    __extends(ApplicationsCreatePathParams, _super);
    function ApplicationsCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=tenantID" }),
        __metadata("design:type", String)
    ], ApplicationsCreatePathParams.prototype, "tenantId", void 0);
    return ApplicationsCreatePathParams;
}(SpeakeasyBase));
export { ApplicationsCreatePathParams };
var ApplicationsCreateQueryParams = /** @class */ (function (_super) {
    __extends(ApplicationsCreateQueryParams, _super);
    function ApplicationsCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api-version" }),
        __metadata("design:type", String)
    ], ApplicationsCreateQueryParams.prototype, "apiVersion", void 0);
    return ApplicationsCreateQueryParams;
}(SpeakeasyBase));
export { ApplicationsCreateQueryParams };
var ApplicationsCreateRequests = /** @class */ (function (_super) {
    __extends(ApplicationsCreateRequests, _super);
    function ApplicationsCreateRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ApplicationCreateParameters)
    ], ApplicationsCreateRequests.prototype, "applicationCreateParameters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/json" }),
        __metadata("design:type", shared.ApplicationCreateParameters)
    ], ApplicationsCreateRequests.prototype, "applicationCreateParameters1", void 0);
    return ApplicationsCreateRequests;
}(SpeakeasyBase));
export { ApplicationsCreateRequests };
var ApplicationsCreateRequest = /** @class */ (function (_super) {
    __extends(ApplicationsCreateRequest, _super);
    function ApplicationsCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ApplicationsCreatePathParams)
    ], ApplicationsCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ApplicationsCreateQueryParams)
    ], ApplicationsCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ApplicationsCreateRequests)
    ], ApplicationsCreateRequest.prototype, "request", void 0);
    return ApplicationsCreateRequest;
}(SpeakeasyBase));
export { ApplicationsCreateRequest };
var ApplicationsCreateResponse = /** @class */ (function (_super) {
    __extends(ApplicationsCreateResponse, _super);
    function ApplicationsCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], ApplicationsCreateResponse.prototype, "application", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ApplicationsCreateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GraphError)
    ], ApplicationsCreateResponse.prototype, "graphError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ApplicationsCreateResponse.prototype, "statusCode", void 0);
    return ApplicationsCreateResponse;
}(SpeakeasyBase));
export { ApplicationsCreateResponse };
