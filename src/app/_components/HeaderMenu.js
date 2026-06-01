"use client";
import { FaApple } from "react-icons/fa";
import Popover from "./Popover/Popover";

function HeaderMenu() {
  return (
    <div className="flex flex-row gap-5 ">
      <Popover.Group>
        <Popover.Section name="apple">
          <Popover.Button>
            <FaApple className="text-xl" />
          </Popover.Button>
          <Popover.Menu>
            <Popover.MenuItem>
              <div>1</div>
            </Popover.MenuItem>
            <Popover.MenuItem>
              <div>1</div>
            </Popover.MenuItem>
            <Popover.MenuItem>
              <div>1</div>
            </Popover.MenuItem>
          </Popover.Menu>
        </Popover.Section>

        <Popover.Section name="file">
          <Popover.Button>File</Popover.Button>
          <Popover.Menu>
            <Popover.MenuItem>
              <div>2</div>
            </Popover.MenuItem>
            <Popover.MenuItem>
              <div>2</div>
            </Popover.MenuItem>
            <Popover.MenuItem>
              <div>2</div>
            </Popover.MenuItem>
          </Popover.Menu>
        </Popover.Section>

        <Popover.Section name="view">
          <Popover.Button>View</Popover.Button>
          <Popover.Menu>
            <Popover.MenuItem>
              <div>3</div>
            </Popover.MenuItem>
            <Popover.MenuItem>
              <div>3</div>
            </Popover.MenuItem>
            <Popover.MenuItem>
              <div>3</div>
            </Popover.MenuItem>
            <Popover.MenuItem>
              <div>3</div>
            </Popover.MenuItem>
          </Popover.Menu>
        </Popover.Section>

        <Popover.Section name="special">
          <Popover.Button>Special</Popover.Button>
          <Popover.Menu>
            <Popover.MenuItem>
              <div>4</div>
            </Popover.MenuItem>
            <Popover.MenuItem>
              <div>4</div>
            </Popover.MenuItem>
            <Popover.MenuItem>
              <div>4</div>
            </Popover.MenuItem>
            <Popover.MenuItem>
              <div>4</div>
            </Popover.MenuItem>
          </Popover.Menu>
        </Popover.Section>
      </Popover.Group>
    </div>
  );
}

export default HeaderMenu;
