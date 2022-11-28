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
var V3CreatePayeeMultipartFormData = /** @class */ (function (_super) {
    __extends(V3CreatePayeeMultipartFormData, _super);
    function V3CreatePayeeMultipartFormData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=file;json=true", elemType: shared.CreatePayeesCsvRequest }),
        __metadata("design:type", Array)
    ], V3CreatePayeeMultipartFormData.prototype, "file", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=payorId" }),
        __metadata("design:type", String)
    ], V3CreatePayeeMultipartFormData.prototype, "payorId", void 0);
    return V3CreatePayeeMultipartFormData;
}(SpeakeasyBase));
export { V3CreatePayeeMultipartFormData };
var V3CreatePayeeRequestsInput = /** @class */ (function (_super) {
    __extends(V3CreatePayeeRequestsInput, _super);
    function V3CreatePayeeRequestsInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.CreatePayeesRequestInput)
    ], V3CreatePayeeRequestsInput.prototype, "createPayeesRequest", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" }),
        __metadata("design:type", V3CreatePayeeMultipartFormData)
    ], V3CreatePayeeRequestsInput.prototype, "object", void 0);
    return V3CreatePayeeRequestsInput;
}(SpeakeasyBase));
export { V3CreatePayeeRequestsInput };
var V3CreatePayeeRequest = /** @class */ (function (_super) {
    __extends(V3CreatePayeeRequest, _super);
    function V3CreatePayeeRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", V3CreatePayeeRequestsInput)
    ], V3CreatePayeeRequest.prototype, "request", void 0);
    return V3CreatePayeeRequest;
}(SpeakeasyBase));
export { V3CreatePayeeRequest };
var V3CreatePayeeResponse = /** @class */ (function (_super) {
    __extends(V3CreatePayeeResponse, _super);
    function V3CreatePayeeResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], V3CreatePayeeResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.CreatePayeesCsvResponse)
    ], V3CreatePayeeResponse.prototype, "createPayeesCsvResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], V3CreatePayeeResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], V3CreatePayeeResponse.prototype, "inlineResponse400", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], V3CreatePayeeResponse.prototype, "inlineResponse401", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], V3CreatePayeeResponse.prototype, "inlineResponse403", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], V3CreatePayeeResponse.prototype, "inlineResponse404", void 0);
    return V3CreatePayeeResponse;
}(SpeakeasyBase));
export { V3CreatePayeeResponse };
