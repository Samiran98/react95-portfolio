import { Avatar, Checkbox, Fieldset, ProgressBar, Tab, Tabs } from "@react95/core";

function Resume() {
  return (
    <Tabs defaultActiveTab="Genesis">
      {/* -------------------- GENESIS -------------------- */}
      <Tab title="Genesis">
        <h3>Behold, I am Samiran Ghosh</h3>
        <Avatar
          src="https://images.rawpixel.com/image_png_social_portrait/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDI0LTAyL3Jhd3BpeGVsX29mZmljZV80N19mdWxsX2JvZHlfM2RfYXZhdGFyXzNkX3JlbmRlcl9vZl9hX2pveWZ1bF9idV8zNDhkYWIwNy1iMTE1LTQ1NTMtOWJjYy1kZDc2YTVmZDFmY2VfMS5wbmc.png"
          alt="Samiran Ghosh Avatar"
          height="100%"
          size="100px"
        />

        <p>A Software Engineer Crafting Scalable Digital Experiences</p>

        <Fieldset legend="Objective">
          <p>
            Passionate Software Engineer with 3.5+ years of experience in building
            web applications and backend systems. Skilled at writing clean, 
            maintainable code and experienced in collaborating across small and 
            large teams. Capable of working independently or in office environments.
          </p>
        </Fieldset>

        <Fieldset legend="Education">
          <p>
            <b>Bachelor of Computer Science</b><br />
            West Bengal University of Technology (2015 – 2019)
          </p>
        </Fieldset>
      </Tab>

      {/* -------------------- EXPERIENCE + PROJECTS -------------------- */}
      <Tab title="Chronicles of a Coder">
        <Fieldset legend="Codelogicx Technologies Pvt. Ltd. (Apr 2021 – Present)">
          <Checkbox
            readOnly
            checked
            label="ZOMA — Developed a client-based application for project estimation using ReactJS, NodeJS, and PostgreSQL, used by 10+ companies."
          />
          <Checkbox
            readOnly
            checked
            label="Zalyon — Built an internal manpower management system using NodeJS, VueJS, ReactJS, and MySQL."
          />
          <Checkbox
            readOnly
            checked
            label="Developed a warehouse and resource management platform using Vue.js."
          />
        </Fieldset>

        <Fieldset legend="Personal Projects">
          <Checkbox
            readOnly
            checked
            label="srt-grid — A custom React table library created during development of a production application using React & TypeScript."
          />
          <Checkbox
            readOnly
            checked
            label="Blog App — A blog-sharing platform built using Express.js and MongoDB."
          />
        </Fieldset>

        <Fieldset legend="Academic Projects">
          <Checkbox
            readOnly
            checked
            label="Unmanned ground vehicle with image processing (Python, TensorFlow)."
          />
          <Checkbox
            readOnly
            checked
            label="Message encoding & decoding system using Email in Python."
          />
          <Checkbox
            readOnly
            checked
            label="IoT-based Home Automation System."
          />
        </Fieldset>
      </Tab>

      {/* -------------------- SKILLS -------------------- */}
      <Tab title="Arsenal of a Software Engineer">
        <div style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}>
          <Fieldset legend="Core Technologies">
            <ul>
              <li>JavaScript (ES6+)</li>
              <ProgressBar percent={95} width="200px" />

              <li>TypeScript</li>
              <ProgressBar percent={90} width="200px" />

              <li>React.js</li>
              <ProgressBar percent={95} width="200px" />

              <li>Vue.js</li>
              <ProgressBar percent={85} width="200px" />

              <li>Node.js</li>
              <ProgressBar percent={88} width="200px" />

              <li>MySQL</li>
              <ProgressBar percent={80} width="200px" />

              <li>Data Structures</li>
              <ProgressBar percent={85} width="200px" />

              <li>Unix</li>
              <ProgressBar percent={75} width="200px" />
            </ul>
          </Fieldset>

          <Fieldset legend="Soft Skills">
            <ul>
              <li>Time Management</li>
              <ProgressBar percent={90} width="200px" />

              <li>Problem Solving</li>
              <ProgressBar percent={95} width="200px" />

              <li>Communication</li>
              <ProgressBar percent={85} width="200px" />

              <li>Adaptability</li>
              <ProgressBar percent={90} width="200px" />
            </ul>
          </Fieldset>
        </div>
      </Tab>

      {/* -------------------- PERSONAL TRAITS -------------------- */}
      <Tab title="The Soul of the Engineer">
        <Fieldset legend="Who I Am">
          <p>
            A committed engineer who thrives on solving complex problems and
            building meaningful digital solutions. I believe in continuous
            learning, modern engineering practices, and teamwork that pushes the
            boundaries of innovation.
          </p>
        </Fieldset>

        <Fieldset legend="Hobbies & Interests">
          <ul>
            <li>Playing and watching cricket and football</li>
            <li>Reading tech blogs and journals to stay updated</li>
          </ul>
        </Fieldset>

        <Fieldset legend="Leadership">
          <p>
            Admin and organizer of the annual college tech fest for two years,
            leading events including hackathons, gaming competitions, and cultural
            programs involving students from multiple colleges.
          </p>
        </Fieldset>
      </Tab>
    </Tabs>
  );
}

export default Resume;
