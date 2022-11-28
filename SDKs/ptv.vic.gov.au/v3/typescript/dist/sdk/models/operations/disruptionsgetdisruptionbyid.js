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
var DisruptionsGetDisruptionByIdPathParams = /** @class */ (function (_super) {
    __extends(DisruptionsGetDisruptionByIdPathParams, _super);
    function DisruptionsGetDisruptionByIdPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=disruption_id" }),
        __metadata("design:type", Number)
    ], DisruptionsGetDisruptionByIdPathParams.prototype, "disruptionId", void 0);
    return DisruptionsGetDisruptionByIdPathParams;
}(SpeakeasyBase));
export { DisruptionsGetDisruptionByIdPathParams };
var DisruptionsGetDisruptionByIdQueryParams = /** @class */ (function (_super) {
    __extends(DisruptionsGetDisruptionByIdQueryParams, _super);
    function DisruptionsGetDisruptionByIdQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=devid" }),
        __metadata("design:type", String)
    ], DisruptionsGetDisruptionByIdQueryParams.prototype, "devid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=signature" }),
        __metadata("design:type", String)
    ], DisruptionsGetDisruptionByIdQueryParams.prototype, "signature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=token" }),
        __metadata("design:type", String)
    ], DisruptionsGetDisruptionByIdQueryParams.prototype, "token", void 0);
    return DisruptionsGetDisruptionByIdQueryParams;
}(SpeakeasyBase));
export { DisruptionsGetDisruptionByIdQueryParams };
var DisruptionsGetDisruptionByIdRequest = /** @class */ (function (_super) {
    __extends(DisruptionsGetDisruptionByIdRequest, _super);
    function DisruptionsGetDisruptionByIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DisruptionsGetDisruptionByIdPathParams)
    ], DisruptionsGetDisruptionByIdRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DisruptionsGetDisruptionByIdQueryParams)
    ], DisruptionsGetDisruptionByIdRequest.prototype, "queryParams", void 0);
    return DisruptionsGetDisruptionByIdRequest;
}(SpeakeasyBase));
export { DisruptionsGetDisruptionByIdRequest };
var DisruptionsGetDisruptionByIdResponse = /** @class */ (function (_super) {
    __extends(DisruptionsGetDisruptionByIdResponse, _super);
    function DisruptionsGetDisruptionByIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], DisruptionsGetDisruptionByIdResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DisruptionsGetDisruptionByIdResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DisruptionsGetDisruptionByIdResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.V3DisruptionResponse)
    ], DisruptionsGetDisruptionByIdResponse.prototype, "v3DisruptionResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.V3ErrorResponse)
    ], DisruptionsGetDisruptionByIdResponse.prototype, "v3ErrorResponse", void 0);
    return DisruptionsGetDisruptionByIdResponse;
}(SpeakeasyBase));
export { DisruptionsGetDisruptionByIdResponse };
