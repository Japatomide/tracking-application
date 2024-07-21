import { Form, Input, Button } from "antd";
import Navbar from "../components/Navbar";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const { Item: FormItem } = Form;

const FormDisplay = () => {
  const [trackingNumber, setTrackingNumber] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (values) => {
    console.log("Form Values:", values);
    navigate(`/track?trackingNumber=${trackingNumber}`);
  };

  return (
    <div>
      <Navbar />
      <div className="flex justify-center items-center h-[80vh]">
        <Form
          name="basic_form"
          initialValues={{ remember: true }}
          onFinish={handleSubmit}
          layout="vertical"
          style={{ maxWidth: "300px", margin: "0 auto" }}
        >
          <FormItem
            label="Track your Shipment"
            name="inputField"
            rules={[
              { required: true, message: "Your tracking number please!" },
              { pattern: /^\d+$/, message: "Input must be a number!" },
            ]}
          >
            <Input
              placeholder="Enter Tracking Number"
              onChange={(e) => setTrackingNumber(e.target.value)}
              minLength={5}
              maxLength={5}
            />
          </FormItem>
          <FormItem>
            <Button className="bg-black text-white" htmlType="submit">
              Search
            </Button>
          </FormItem>
        </Form>
      </div>
    </div>
  );
};

export default FormDisplay;
