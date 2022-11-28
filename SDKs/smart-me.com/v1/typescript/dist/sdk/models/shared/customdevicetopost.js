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
import { CustomDeviceValues } from "./customdevicevalues";
// CustomDeviceToPost
/**
 * Container Class for the Web API
**/
var CustomDeviceToPost = /** @class */ (function (_super) {
    __extends(CustomDeviceToPost, _super);
    function CustomDeviceToPost() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Id" }),
        __metadata("design:type", String)
    ], CustomDeviceToPost.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], CustomDeviceToPost.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Serial" }),
        __metadata("design:type", Number)
    ], CustomDeviceToPost.prototype, "serial", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ValueDate" }),
        __metadata("design:type", Date)
    ], CustomDeviceToPost.prototype, "valueDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Values", elemType: CustomDeviceValues }),
        __metadata("design:type", Array)
    ], CustomDeviceToPost.prototype, "values", void 0);
    return CustomDeviceToPost;
}(SpeakeasyBase));
export { CustomDeviceToPost };
