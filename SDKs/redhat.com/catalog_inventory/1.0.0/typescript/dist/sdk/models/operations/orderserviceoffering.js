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
var OrderServiceOfferingPathParams = /** @class */ (function (_super) {
    __extends(OrderServiceOfferingPathParams, _super);
    function OrderServiceOfferingPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], OrderServiceOfferingPathParams.prototype, "id", void 0);
    return OrderServiceOfferingPathParams;
}(SpeakeasyBase));
export { OrderServiceOfferingPathParams };
var OrderServiceOffering200ApplicationJson = /** @class */ (function (_super) {
    __extends(OrderServiceOffering200ApplicationJson, _super);
    function OrderServiceOffering200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=task_id" }),
        __metadata("design:type", String)
    ], OrderServiceOffering200ApplicationJson.prototype, "taskId", void 0);
    return OrderServiceOffering200ApplicationJson;
}(SpeakeasyBase));
export { OrderServiceOffering200ApplicationJson };
var OrderServiceOfferingRequest = /** @class */ (function (_super) {
    __extends(OrderServiceOfferingRequest, _super);
    function OrderServiceOfferingRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", OrderServiceOfferingPathParams)
    ], OrderServiceOfferingRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.OrderParametersServiceOfferingInput)
    ], OrderServiceOfferingRequest.prototype, "request", void 0);
    return OrderServiceOfferingRequest;
}(SpeakeasyBase));
export { OrderServiceOfferingRequest };
var OrderServiceOfferingResponse = /** @class */ (function (_super) {
    __extends(OrderServiceOfferingResponse, _super);
    function OrderServiceOfferingResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], OrderServiceOfferingResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], OrderServiceOfferingResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", OrderServiceOffering200ApplicationJson)
    ], OrderServiceOfferingResponse.prototype, "orderServiceOffering200ApplicationJsonObject", void 0);
    return OrderServiceOfferingResponse;
}(SpeakeasyBase));
export { OrderServiceOfferingResponse };
