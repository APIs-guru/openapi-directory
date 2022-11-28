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
var ApplicationsAddOwnerPathParams = /** @class */ (function (_super) {
    __extends(ApplicationsAddOwnerPathParams, _super);
    function ApplicationsAddOwnerPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=applicationObjectId" }),
        __metadata("design:type", String)
    ], ApplicationsAddOwnerPathParams.prototype, "applicationObjectId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=tenantID" }),
        __metadata("design:type", String)
    ], ApplicationsAddOwnerPathParams.prototype, "tenantId", void 0);
    return ApplicationsAddOwnerPathParams;
}(SpeakeasyBase));
export { ApplicationsAddOwnerPathParams };
var ApplicationsAddOwnerQueryParams = /** @class */ (function (_super) {
    __extends(ApplicationsAddOwnerQueryParams, _super);
    function ApplicationsAddOwnerQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api-version" }),
        __metadata("design:type", String)
    ], ApplicationsAddOwnerQueryParams.prototype, "apiVersion", void 0);
    return ApplicationsAddOwnerQueryParams;
}(SpeakeasyBase));
export { ApplicationsAddOwnerQueryParams };
var ApplicationsAddOwnerRequests = /** @class */ (function (_super) {
    __extends(ApplicationsAddOwnerRequests, _super);
    function ApplicationsAddOwnerRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", Map)
    ], ApplicationsAddOwnerRequests.prototype, "addOwnerParameters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/json" }),
        __metadata("design:type", Map)
    ], ApplicationsAddOwnerRequests.prototype, "addOwnerParameters1", void 0);
    return ApplicationsAddOwnerRequests;
}(SpeakeasyBase));
export { ApplicationsAddOwnerRequests };
var ApplicationsAddOwnerRequest = /** @class */ (function (_super) {
    __extends(ApplicationsAddOwnerRequest, _super);
    function ApplicationsAddOwnerRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ApplicationsAddOwnerPathParams)
    ], ApplicationsAddOwnerRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ApplicationsAddOwnerQueryParams)
    ], ApplicationsAddOwnerRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ApplicationsAddOwnerRequests)
    ], ApplicationsAddOwnerRequest.prototype, "request", void 0);
    return ApplicationsAddOwnerRequest;
}(SpeakeasyBase));
export { ApplicationsAddOwnerRequest };
var ApplicationsAddOwnerResponse = /** @class */ (function (_super) {
    __extends(ApplicationsAddOwnerResponse, _super);
    function ApplicationsAddOwnerResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ApplicationsAddOwnerResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GraphError)
    ], ApplicationsAddOwnerResponse.prototype, "graphError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ApplicationsAddOwnerResponse.prototype, "statusCode", void 0);
    return ApplicationsAddOwnerResponse;
}(SpeakeasyBase));
export { ApplicationsAddOwnerResponse };
