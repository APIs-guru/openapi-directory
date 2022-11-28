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
var DirectiveDetailsPathParams = /** @class */ (function (_super) {
    __extends(DirectiveDetailsPathParams, _super);
    function DirectiveDetailsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=directiveId" }),
        __metadata("design:type", String)
    ], DirectiveDetailsPathParams.prototype, "directiveId", void 0);
    return DirectiveDetailsPathParams;
}(SpeakeasyBase));
export { DirectiveDetailsPathParams };
export var DirectiveDetails200ApplicationJsonActionEnum;
(function (DirectiveDetails200ApplicationJsonActionEnum) {
    DirectiveDetails200ApplicationJsonActionEnum["DirectiveDetails"] = "directiveDetails";
})(DirectiveDetails200ApplicationJsonActionEnum || (DirectiveDetails200ApplicationJsonActionEnum = {}));
var DirectiveDetails200ApplicationJsonData = /** @class */ (function (_super) {
    __extends(DirectiveDetails200ApplicationJsonData, _super);
    function DirectiveDetails200ApplicationJsonData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=directives", elemType: shared.Directive }),
        __metadata("design:type", Array)
    ], DirectiveDetails200ApplicationJsonData.prototype, "directives", void 0);
    return DirectiveDetails200ApplicationJsonData;
}(SpeakeasyBase));
export { DirectiveDetails200ApplicationJsonData };
export var DirectiveDetails200ApplicationJsonResultEnum;
(function (DirectiveDetails200ApplicationJsonResultEnum) {
    DirectiveDetails200ApplicationJsonResultEnum["Success"] = "success";
    DirectiveDetails200ApplicationJsonResultEnum["Error"] = "error";
})(DirectiveDetails200ApplicationJsonResultEnum || (DirectiveDetails200ApplicationJsonResultEnum = {}));
var DirectiveDetails200ApplicationJson = /** @class */ (function (_super) {
    __extends(DirectiveDetails200ApplicationJson, _super);
    function DirectiveDetails200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=action" }),
        __metadata("design:type", String)
    ], DirectiveDetails200ApplicationJson.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", DirectiveDetails200ApplicationJsonData)
    ], DirectiveDetails200ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=result" }),
        __metadata("design:type", String)
    ], DirectiveDetails200ApplicationJson.prototype, "result", void 0);
    return DirectiveDetails200ApplicationJson;
}(SpeakeasyBase));
export { DirectiveDetails200ApplicationJson };
var DirectiveDetailsRequest = /** @class */ (function (_super) {
    __extends(DirectiveDetailsRequest, _super);
    function DirectiveDetailsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DirectiveDetailsPathParams)
    ], DirectiveDetailsRequest.prototype, "pathParams", void 0);
    return DirectiveDetailsRequest;
}(SpeakeasyBase));
export { DirectiveDetailsRequest };
var DirectiveDetailsResponse = /** @class */ (function (_super) {
    __extends(DirectiveDetailsResponse, _super);
    function DirectiveDetailsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DirectiveDetailsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DirectiveDetailsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DirectiveDetails200ApplicationJson)
    ], DirectiveDetailsResponse.prototype, "directiveDetails200ApplicationJsonObject", void 0);
    return DirectiveDetailsResponse;
}(SpeakeasyBase));
export { DirectiveDetailsResponse };
