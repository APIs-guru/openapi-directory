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
export var CheckCve200ApplicationJsonActionEnum;
(function (CheckCve200ApplicationJsonActionEnum) {
    CheckCve200ApplicationJsonActionEnum["CheckCve"] = "checkCVE";
})(CheckCve200ApplicationJsonActionEnum || (CheckCve200ApplicationJsonActionEnum = {}));
var CheckCve200ApplicationJsonData = /** @class */ (function (_super) {
    __extends(CheckCve200ApplicationJsonData, _super);
    function CheckCve200ApplicationJsonData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cveChecks", elemType: shared.CveCheck }),
        __metadata("design:type", Array)
    ], CheckCve200ApplicationJsonData.prototype, "cveChecks", void 0);
    return CheckCve200ApplicationJsonData;
}(SpeakeasyBase));
export { CheckCve200ApplicationJsonData };
export var CheckCve200ApplicationJsonResultEnum;
(function (CheckCve200ApplicationJsonResultEnum) {
    CheckCve200ApplicationJsonResultEnum["Success"] = "success";
    CheckCve200ApplicationJsonResultEnum["Error"] = "error";
})(CheckCve200ApplicationJsonResultEnum || (CheckCve200ApplicationJsonResultEnum = {}));
var CheckCve200ApplicationJson = /** @class */ (function (_super) {
    __extends(CheckCve200ApplicationJson, _super);
    function CheckCve200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=action" }),
        __metadata("design:type", String)
    ], CheckCve200ApplicationJson.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", CheckCve200ApplicationJsonData)
    ], CheckCve200ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=result" }),
        __metadata("design:type", String)
    ], CheckCve200ApplicationJson.prototype, "result", void 0);
    return CheckCve200ApplicationJson;
}(SpeakeasyBase));
export { CheckCve200ApplicationJson };
var CheckCveResponse = /** @class */ (function (_super) {
    __extends(CheckCveResponse, _super);
    function CheckCveResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CheckCveResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CheckCveResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CheckCve200ApplicationJson)
    ], CheckCveResponse.prototype, "checkCve200ApplicationJsonObject", void 0);
    return CheckCveResponse;
}(SpeakeasyBase));
export { CheckCveResponse };
