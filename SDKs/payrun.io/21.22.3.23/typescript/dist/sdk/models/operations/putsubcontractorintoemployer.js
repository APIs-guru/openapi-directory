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
var PutSubContractorIntoEmployerPathParams = /** @class */ (function (_super) {
    __extends(PutSubContractorIntoEmployerPathParams, _super);
    function PutSubContractorIntoEmployerPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=EmployerId" }),
        __metadata("design:type", String)
    ], PutSubContractorIntoEmployerPathParams.prototype, "employerId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=SubContractorId" }),
        __metadata("design:type", String)
    ], PutSubContractorIntoEmployerPathParams.prototype, "subContractorId", void 0);
    return PutSubContractorIntoEmployerPathParams;
}(SpeakeasyBase));
export { PutSubContractorIntoEmployerPathParams };
var PutSubContractorIntoEmployerHeaders = /** @class */ (function (_super) {
    __extends(PutSubContractorIntoEmployerHeaders, _super);
    function PutSubContractorIntoEmployerHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Api-Version" }),
        __metadata("design:type", String)
    ], PutSubContractorIntoEmployerHeaders.prototype, "apiVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" }),
        __metadata("design:type", String)
    ], PutSubContractorIntoEmployerHeaders.prototype, "authorization", void 0);
    return PutSubContractorIntoEmployerHeaders;
}(SpeakeasyBase));
export { PutSubContractorIntoEmployerHeaders };
var PutSubContractorIntoEmployerRequest = /** @class */ (function (_super) {
    __extends(PutSubContractorIntoEmployerRequest, _super);
    function PutSubContractorIntoEmployerRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutSubContractorIntoEmployerPathParams)
    ], PutSubContractorIntoEmployerRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutSubContractorIntoEmployerHeaders)
    ], PutSubContractorIntoEmployerRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.SubContractor)
    ], PutSubContractorIntoEmployerRequest.prototype, "request", void 0);
    return PutSubContractorIntoEmployerRequest;
}(SpeakeasyBase));
export { PutSubContractorIntoEmployerRequest };
var PutSubContractorIntoEmployerResponse = /** @class */ (function (_super) {
    __extends(PutSubContractorIntoEmployerResponse, _super);
    function PutSubContractorIntoEmployerResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PutSubContractorIntoEmployerResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorModel)
    ], PutSubContractorIntoEmployerResponse.prototype, "errorModel", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PutSubContractorIntoEmployerResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.SubContractor)
    ], PutSubContractorIntoEmployerResponse.prototype, "subContractor", void 0);
    return PutSubContractorIntoEmployerResponse;
}(SpeakeasyBase));
export { PutSubContractorIntoEmployerResponse };
